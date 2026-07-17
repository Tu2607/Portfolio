package main

import (
	"fmt"
	"os"
	"strings"
)

// Download this source from Files and compile it yourself,
// or feed it to your favorite AI with your requirements.

type Engineer struct {
	Name  string
	Role  string
	Team  string
	Focus []string
	Ships string
}

func (e Engineer) Opportunities(pitch []string) bool {
	// True if any pitch keyword touches e.Focus.
	for _, p := range pitch {
		for _, f := range e.Focus {
			if strings.Contains(f, p) {
				return true
			}
		}
	}
	return false
}

func main() {
	// A software engineer focused on backend
	// systems, infra automation, and dev tools.
	tu := Engineer{
		Name: "Tu Vu",
		Role: "Software Engineer",
		Team: "Puppet by Perforce",
		Focus: []string{
			"infrastructure automation",
			"developer tools",
			"backend systems",
		},
		Ships: "security compliance across " +
			"Linux + Windows fleets",
	}

	requirements := os.Args[1:]
	if len(requirements) == 0 {
		requirements = []string{"backend", "automation"}
	}

	if tu.Opportunities(requirements) {
		fmt.Println("→ Found a match. Feel free to reach out!")
		fmt.Println("  tuvu2607@gmail.com")
	} else {
		fmt.Println("→ no match yet, but thanks for stopping by")
	}
}
