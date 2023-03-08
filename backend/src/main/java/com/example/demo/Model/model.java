package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity

public class model {
	@Id

	private int id;

	private String employeeName;

	private int age;

	private float salary;

	private int experience;

	private String designation;

	public int getId() {

	return id;

	}

	public void setId(int id) {

	this.id = id;

	}

	public String getEmployeeName() {

	return employeeName;

	}

	public void setEmployeeName(String employeeName) {

	this.employeeName = employeeName;

	}

	public int getAge() {

	return age;

	}

	public void setAge(int age) {

	this.age = age;

	}

	public float getSalary() {

	return salary;

	}

	public void setSalary(float salary) {

	this.salary = salary;

	}

	public int getExperience() {

	return experience;

	}

	public void setExperience(int experience) {

	this.experience = experience;

	}

	public String getDesignation() {

	return designation;

	}

	public void setDesignation(String designation) {

	this.designation = designation;

	}
}
