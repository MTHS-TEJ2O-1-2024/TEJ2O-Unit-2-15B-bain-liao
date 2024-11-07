/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Bain Liao
 * Created on: Nov 2024
 * This program rotates a pixel clockwise and counterclockwise around the perimeter
*/

// variables
let sprite: game.LedSprite = null
let loopCounter = 0
let steps = 0

// setup
basic.showIcon(IconNames.Happy)

// when "A" is pressed, the pixels move around the outside edge of the LED matrix
input.onButtonPressed(Button.A, function () {
    // setup
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(0, 0)
    basic.pause(500)
    // Loop to move the pixel around the outside edge
    while (loopCounter < 4) {
        steps = 0
        while (steps < 4) {
            sprite.move(1)
            basic.pause(500)
            steps++
        }
        sprite.turn(Direction.Right, 90)
        loopCounter++
    }
    // Delete sprite and show a happy icon when done
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
