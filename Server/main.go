package main

import (
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"pet-rescue/config"
	"pet-rescue/handlers"
)

func main() {
	r := gin.Default()

	// Configure CORS for cross-origin requests from frontend
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"}, // Adjust this to match your frontend
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// Set up database connection
	db, sqlDB := config.SetupDatabaseConnection() // Retrieves *gorm.DB and *sql.DB
	defer config.CloseDatabaseConnection(sqlDB)   // Ensures that the database is properly closed when the application exits

	// Middleware to inject db instance into the context
	r.Use(func(c *gin.Context) {
		c.Set("db", db)
		c.Next()
	})

	// Define routes
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "Welcome to the Pet Rescue API!"})
	})
	r.POST("/signup", handlers.SignUpHandler)
	r.POST("/signin", handlers.SignInHandler)
	r.POST("/report", handlers.ReportPetHandler)
	r.GET("/pets", handlers.PetsHandler)
	r.PUT("/pets/:id", handlers.UpdatePetHandler)
	r.DELETE("/pets/:id", handlers.DeletePetHandler)
	r.GET("/volunteers", handlers.VolunteersHandler)

	// Start the server in a goroutine to allow for graceful shutdown
	go func() {
		if err := r.Run(":8012"); err != nil && err != http.ErrServerClosed {
			log.Fatalf("fail to start server: %v", err)
		}
	}()

	// Wait for interrupt signal to gracefully shutdown the server with a timeout of 5 seconds.
	quit := make(chan os.Signal, 1)
	// kill (no param) default sends syscall.SIGTERM
	// kill -2 is syscall.SIGINT
	// kill -9 is syscall.SIGKILL but can't be caught, so don't need to add it
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit
	log.Println("Shutting down server...")

}
