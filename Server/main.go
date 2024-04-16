package main

import (
	"Server/config"
	"Server/handlers"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
    r := gin.Default()

	// Configure CORS
    r.Use(cors.New(cors.Config{
        AllowOrigins:     []string{"http://localhost:3000"},
        AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
        AllowHeaders:     []string{"Origin", "Content-Type", "Accept"},
        ExposeHeaders:    []string{"Content-Length"},
        AllowCredentials: true,
        AllowOriginFunc: func(origin string) bool {
            return origin == "http://localhost:3000" 
        },
        MaxAge: 12 * time.Hour,
    }))


    db := config.SetupDatabaseConnection()
    r.Use(func(c *gin.Context) {
        c.Set("db", db)
    })

    // User routes
    r.POST("/signup", handlers.SignUpHandler)
    r.POST("/signin", handlers.SignInHandler)

    // Pet routes
    r.POST("/report", handlers.ReportPetHandler)
    r.GET("/pets", handlers.PetsHandler)

    // Volunteer routes
    r.GET("/volunteers", handlers.VolunteersHandler)

    r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
.const
