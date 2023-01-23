package de.schabelprojects.name_db.Userdetails;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RequiredArgsConstructor
@RestController
@RequestMapping("/users")
@CrossOrigin(origins = {"http://localhost:5173"})
public class UserController {

    private final UserService userService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Collection<User> createCard(@RequestBody User user){
        userService.createUser(user);
        return userService.getUsers();
    }

    @GetMapping
    public Collection<User> getUsers(){
        return userService.getUsers();
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable String id){
        return userService.getUser(id);
    }

    @PutMapping("/{id}")
    public Collection<User> changeCard(@PathVariable String id, @RequestBody User user){
        userService.changeUser(id, user);
        return userService.getUsers();
    }

    @DeleteMapping("/{id}")
    public Collection<User> deleteCard(@PathVariable String id){
        userService.deleteUser(id);
        return userService.getUsers();
    }

    @DeleteMapping()
    public Collection<User> deleteUser(){
        userService.deleteUsers();
        return userService.getUsers();
    }


}
