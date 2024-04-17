package models

import (
	"time"

	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Name      string
	Email     string `gorm:"type:varchar(255);uniqueIndex"`
	Password  string
	Phone     string
	Location  string
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
	Status 	string `json:"status"`
}

type Volunteer struct {
	gorm.Model
	Name      string
	Email     string         `gorm:"type:varchar(255);uniqueIndex"`
	DeletedAt gorm.DeletedAt `gorm:"index"`
}
