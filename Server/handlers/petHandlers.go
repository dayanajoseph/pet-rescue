package handlers
import(
    "net/http"
    "pet-rescue/models"
    "github.com/gin-gonic/gin"
    "gorm.io/gorm"
)
func ReportPetHandler(c *gin.Context) {
    db := c.MustGet("db").(*gorm.DB)
    var pet models.Pet
    if err := c.ShouldBindJSON(&pet); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
    db.Create(&pet)
    c.JSON(http.StatusOK, pet)
}

func PetsHandler(c *gin.Context) {
    db := c.MustGet("db").(*gorm.DB)
    var pets []models.Pet
    db.Find(&pets)
    c.JSON(http.StatusOK, pets)
}

func VolunteersHandler(c *gin.Context) {
    db := c.MustGet("db").(*gorm.DB)
    var volunteers []models.Volunteer
    db.Find(&volunteers)
    c.JSON(http.StatusOK, volunteers)
}
