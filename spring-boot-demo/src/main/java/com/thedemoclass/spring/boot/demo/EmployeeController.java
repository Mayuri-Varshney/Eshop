package com.thedemoclass.spring.boot.demo;

import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/employees")
@RestController
public class EmployeeController {

@GetMapping

//        @GetMapping("/employee")
        public String getEmployee() {
            return "Get Method";
        }

        @PostMapping
//        @RequestMapping(value = "/employee", method = RequestMethod.POST)
        public String createEmployee() {
            return "Post Method";
        }

        @PutMapping
//        @RequestMapping(value = "/employee", method = RequestMethod.PUT)
        public String updateEmployee() {
            return "Put Method";
        }

        @DeleteMapping
//        @RequestMapping(value = "/employee", method = RequestMethod.DELETE)
        public String deleteEmployee() {
            return "Delete Method";
}


}
