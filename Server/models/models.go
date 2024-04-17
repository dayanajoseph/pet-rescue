package models

import (
	"time"

	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Name     string
	Email    string `gorm:"type:varchar(255);uniqueIndex"`
	Password string
    CreatedAt time.Time
    DeletedAt gorm.DeletedAt `gorm:"index"`
}

type Pet struct {
	gorm.Model
        Name     string `json:"name"`
        Type     string `json:"type"`
        Age      int    `json:"age"`
        Image    string `json:"image"` // 
        Location string `json:"location"`
    }
    

type Volunteer struct {
	gorm.Model
	Name      string
	Email     string         `gorm:"type:varchar(255);uniqueIndex"`
	DeletedAt gorm.DeletedAt `gorm:"index"`
}
