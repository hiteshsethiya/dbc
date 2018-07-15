package com.dbc.app.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.common.collect.Lists;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "orders")
@Getter @Setter
@JsonIgnoreProperties(ignoreUnknown = true)
@ToString
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //type
    public enum Type { BREAKFAST, LUNCH, SNACKS, DINNER }
    public static List<Integer> timings = Lists.newArrayList(6, 13, 16, 21);

    @Enumerated(EnumType.STRING)
    @Column(name = "order_type") private Type foodType;

    //what
    @OneToMany
    @JoinTable(name = "order_items", joinColumns = { @JoinColumn(name = "order_id") }, inverseJoinColumns = { @JoinColumn(name = "item_id") })
    private Set<Item> items;

    //when
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private Date deliverOn;

    //person - for whom?
    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    @JsonIgnore private User user;
    @JsonProperty("username") private String getUsername() {
        return this.getUser()!=null? this.getUser().getName() : "Hrishikesh";
    }

    @OneToOne
    @JoinColumn(name = "ordered_for_id", referencedColumnName = "id")
    @JsonIgnore private User orderFor;
    @JsonProperty("orderedFor") private String getOrderedFor() {
        return this.getOrderFor() != null? this.getOrderFor().getName() : this.getUsername();
    }

    //from?
    @OneToOne
    @JoinColumn(name = "restaurant_id", referencedColumnName = "id")
    @JsonIgnore private Restaurant restaurant;
    @JsonProperty("restaurant") private String getRestaurantName() {
        return this.getRestaurant() != null? this.getRestaurant().getName() : "Unknown";
    }


    //instructions
    private String note;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createdAt;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private Date updatedAt;

}
