package handlers

import (
	"net/http"
	"pet-rescue/models"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func ReportPetHandler(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB) // Ensure that you pass the db instance to the context
	var pet models.Pet
	if err := c.ShouldBindJSON(&pet); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := db.Create(&pet).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to report pet"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"success": "Pet reported successfully", "pet": pet})
}

func PetsHandler(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)
	var pets []models.Pet
	db.Find(&pets)
	c.JSON(http.StatusOK, pets)
}

// update
func UpdatePetHandler(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)
	petID := c.Param("id")
	var pet models.Pet

	// First, find the pet that matches the ID
	if err := db.Where("id = ?", petID).First(&pet).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Pet not found"})
		return
	}

	// Bind the updated pet data
	if err := c.ShouldBindJSON(&pet); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Save the updated pet details
	if err := db.Save(&pet).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update pet"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"success": "Pet updated successfully", "pet": pet})
}

// delete
func DeletePetHandler(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)
	petID := c.Param("id")
	var pet models.Pet

	// First, find the pet to ensure it exists
	if err := db.Where("id = ?", petID).First(&pet).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Pet not found"})
		return
	}

	// Delete the pet
	if err := db.Delete(&pet).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete pet"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"success": "Pet deleted successfully"})
}

func VolunteersHandler(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)
	var volunteers []models.Volunteer
	db.Find(&volunteers)
	c.JSON(http.StatusOK, volunteers)
}
