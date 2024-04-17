package config

import (
    "database/sql"
    "gorm.io/driver/mysql"
    "gorm.io/gorm"
    "log"
    "os"
)

func SetupDatabaseConnection() (*gorm.DB, *sql.DB) {
    dsn := "root:Bella1211!@tcp(localhost:3306)/pet_rescue?charset=utf8mb4&parseTime=True&loc=Local"
    db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatalf("Failed to connect to database: %v", err)
        os.Exit(1)
    }

    sqlDB, err := db.DB() // This retrieves the generic database object used by GORM behind the scenes.
    if err != nil {
        log.Fatalf("Failed to get database connection handle: %v", err)
        os.Exit(1)
    }

    return db, sqlDB
}

// It's recommended to call this function from the main.go during application shutdown
func CloseDatabaseConnection(sqlDB *sql.DB) {
    if err := sqlDB.Close(); err != nil {
        log.Fatalf("Failed to close database connection: %v", err)
    }
}
