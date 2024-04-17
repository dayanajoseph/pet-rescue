package models

import (
    "gorm.io/gorm"
)

type User struct {
    gorm.Model
    Name     string
    Email string `gorm:"type:varchar(255);uniqueIndex"` 
    Password string
}

type Pet struct {
    gorm.Model
    Location string
    Phone    string
    Status   string
    Image    string
}

type Volunteer struct {
    gorm.Model
    Name  string
    Email string `gorm:"type:varchar(255);uniqueIndex"` 
}
