package ebhor.servlet;

import java.io.Serializable;
import java.util.Set;
import java.util.HashSet;

public class Student implements Serializable {

    private long id;
    private String name;
    private String gender;
    private Address address;
    private Set subjects = new HashSet(0);
    private String mobileNo;

    public Student() {
    }

    public Student(long id, String name, String gender, String mobileNo) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.mobileNo = mobileNo;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Set getSubjects() {
        return subjects;
    }

    public void setSubjects(Set subjects) {
        this.subjects = subjects;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

}
