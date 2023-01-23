package de.schabelprojects.name_db.Userdetails;


import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public void createUser(User user){
        userRepository.save(user);
    }

    public Collection<User> getUsers(){
        return userRepository.findAll(Sort.by("name"));
    }

    public User getUser(String id){
        return userRepository.findById(id).orElse(null);
    }

    public void deleteUser(String id){
        userRepository.deleteById(id);
    }

    public void changeUser(String id, User changedUser){
        User user = userRepository.findById(id).orElseThrow();

        user.setUsername(changedUser.getUsername());
        user.setFirstname(changedUser.getFirstname());
        user.setMiddlename(changedUser.getMiddlename());
        user.setLastname(changedUser.getLastname());
        user.setAge(changedUser.getAge());
        user.setEmailadress(changedUser.getEmailadress());
        user.setMobilenumber(changedUser.getMobilenumber());




       userRepository.save(user);
    }

    public void deleteUsers() {
        userRepository.deleteAll();
    }

}
