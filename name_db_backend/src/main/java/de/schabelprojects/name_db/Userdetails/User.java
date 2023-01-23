package de.schabelprojects.name_db.Userdetails;


import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
@NoArgsConstructor
@Data
public class User {

    @Id
    private String id;
    private String username;
    private String firstname;
    private String middlename;
    private String lastname;
    private Number age;
    private String emailadress;
    private String mobilenumber;
}
