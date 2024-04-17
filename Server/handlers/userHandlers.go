package handlers

import (
	"fmt"
	"net/http"
	"pet-rescue/models"

	"github.com/gin-gonic/gin"

	"gorm.io/gorm"
)

func SignUpHandler(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)
	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	db.Create(&user)
	c.JSON(http.StatusOK, user)
}

func SignInHandler(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)

	// Bind JSON data to user struct
	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	//Query user by email
	var foundUser models.User
	result := db.Where("email = ? ", user.Email).First(&foundUser)
	fmt.Println("result", result)
	// Check for errors and if a user was found
	if result.Error != nil || result.RowsAffected == 0 {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Incorrect credentials"})
		return
	} 


	// Check if the provided password matches the stored password
	if foundUser.Password != user.Password {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Incorrect password"})
		return
	}

	// Successful authentication, respond with user details
	c.JSON(http.StatusOK, foundUser)
}
