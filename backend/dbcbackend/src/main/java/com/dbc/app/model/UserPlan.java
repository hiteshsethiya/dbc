package com.dbc.app.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "user_plan")
@Getter
@Setter
public class UserPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String swiggyCustomerId;

    @Column(columnDefinition = "TEXT")
    private String weekPlan;

    public UserPlan() {}
}