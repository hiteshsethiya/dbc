package com.dbc.app.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "orders")
@Getter @Setter
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //type
    public enum Type { BREAKFAST, LUNCH, SNACKS, DINNER }
    @Enumerated(EnumType.STRING)
    @Column(name = "order_type") private Type foodType;

    //what
    @OneToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "order_items", joinColumns = { @JoinColumn(name = "order_id") }, inverseJoinColumns = { @JoinColumn(name = "item_id") })
    private Set<Item> item;

    //when
    @Temporal(TemporalType.TIMESTAMP)
    private Date deliverOn;

    //person - for whom?
    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @OneToOne
    @JoinColumn(name = "ordered_for_id", referencedColumnName = "id")
    private User orderedFor;

    //from?
    @OneToOne
    @JoinColumn(name = "restaurant_id", referencedColumnName = "id")
    private Restaurant restaurant;

    //instructions
    private String note;

}
