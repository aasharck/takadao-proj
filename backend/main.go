package main

import (
	"log"
	"net/http"
	"strings"
	"github.com/gin-gonic/gin"
)

type Venue struct {
	Id     string `json:"id"`
	VenueType     string `json:"type"`
}

var venues = []Venue{
	{Id: "1", VenueType: "Football Field"},
	{Id: "2", VenueType: "Basketball Court"},
	{Id: "3", VenueType: "Tennis Court"},
	{Id: "4", VenueType: "Concert Hall"},
	{Id: "5", VenueType: "Art Gallery"},
	{Id: "6", VenueType: "Movie Theater"},
	{Id: "7", VenueType: "Zoo"},
	{Id: "8", VenueType: "Museum"},
	{Id: "9", VenueType: "Gymnasium"},
	{Id: "10", VenueType: "Convention Center"},
	{Id: "11", VenueType: "Stadium"},
}

func suggestVenues(c *gin.Context) {
	query := c.Query("query")

	var suggestions []Venue

	if query != "" {
		query = strings.ToLower(query)
		for _, venue := range venues {
			if strings.Contains(strings.ToLower(venue.VenueType), query){
				suggestions = append(suggestions, venue)
			}
		}
	}

	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Methods", "GET, OPTIONS")
	c.Header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

	c.JSON(http.StatusOK, suggestions)
}

func main() {
	r := gin.Default()

	r.GET("/suggestVenues", suggestVenues)

	if err := r.Run("localhost:8080"); err != nil {
		log.Fatal("Failed to start server: ", err)
	}
}