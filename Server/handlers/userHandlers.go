package handlers

import (
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
    var user models.User
    if err := c.ShouldBindJSON(&user); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
    var foundUser models.User
    db.Where("email = ?", user.Email).First(&foundUser)
    if foundUser.ID == 0 || foundUser.Password != user.Password {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "Incorrect credentials"})
        return
    }
    c.JSON(http.StatusOK, foundUser)
}
