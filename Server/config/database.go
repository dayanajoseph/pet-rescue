package config

import (
    "gorm.io/driver/mysql"
    "gorm.io/gorm"
    "pet-rescue/models"
)

func SetupDatabaseConnection() *gorm.DB {
    dsn := "root:Bella1211!@tcp(localhost:3306)/pet_rescue"
    db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
    if err != nil {
        panic("Failed to connect to database")
    }

    // AutoMigrate our models
    db.AutoMigrate(&models.User{}, &models.Pet{}, &models.Volunteer{})

    return db
}
