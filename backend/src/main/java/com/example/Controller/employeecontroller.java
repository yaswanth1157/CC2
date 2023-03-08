package com.example.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.Model.model;
import com.example.demo.service.EmployeeService;

public class employeecontroller {
	@Autowired
	EmployeeService service;

	@PostMapping("/employee")
	public Boolean create(@RequestBody model employee) {
	return service.addEmployee(employee);
	}

	@GetMapping("/employee")
	public List<model> get(){
	return service.getEmployee();
	}

	@GetMapping("/employee/{id}")
	public Optional<model> getById(@PathVariable int id){
	return service.getEmployeeById(id);
	}

	@DeleteMapping("/employee/{id}")
	public Boolean delete(@PathVariable int id) {
	return service.deleteEmployeeById(id);
	}

	@PutMapping("/employee/{id}")
	public model update(@RequestBody model employee ) {
	return service.updateEmployeeById(employee);
	}

}
