import React, { Component } from 'react'
import GridSquare from './grid-square'

// Draws the "next" block view showing the next block to drop
class NextBlock extends Component {

    makeGrid() {
        const box = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]
        // Map the block to the grid
        return box.map((rowArray, row) => {
            return rowArray.map((sqaure, col) => {
                return <GridSquare ley={`${row}${col}`} color={0} />
            })
        })
    }

    render () {
        return (
            <div className="next-block">
            {this.makeGrid()}</div>
        )
    }
}

export default NextBlock