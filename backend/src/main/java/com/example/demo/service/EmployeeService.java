package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Model.model;
import com.example.demo.repository.EmployeeRepository;


@Service
public class EmployeeService {
@Autowired
EmployeeRepository repository;

public Boolean addEmployee(model employee) {
repository.save(employee); 
 return true;
}
public List<model> getEmployee(){
return repository.findAll();
}

public Optional<model> getEmployeeById(int id){
return repository.findById(id);
}

public model updateEmployeeById(model employee) {
repository.save(employee);
return employee;
}

public Boolean deleteEmployeeById(int id) {
repository.deleteById(id);
return true;
}

}
