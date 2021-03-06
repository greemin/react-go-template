package main

import (
  "log"
  "net/http"
  "os"
  "path"
)

func main() {
  port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	http.Handle("/", http.FileServer(http.Dir(path.Join("client", "public"))))
	log.Println("Server started: http://localhost:" + port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
