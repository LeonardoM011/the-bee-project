package com.leonardom011.thebeeproject

import org.springframework.boot.Banner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class TheBeeProjectApplication

fun main(args: Array<String>) {
    runApplication<TheBeeProjectApplication>(*args) {
        setBannerMode(Banner.Mode.OFF)
    }
}
