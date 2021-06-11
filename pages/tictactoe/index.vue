<template>
  <div class="main-grid">
    <div class="col">
      <h1>TicTacToe</h1>
      <h2 v-if="!finished">Current Player: {{ player }}</h2>
      <h2 v-else-if="finished && winner">Player {{ winner }} won the game!</h2>
      <h2 v-else>Its a tie!!</h2>
    </div>
    <div class="col">
      <div class="grid-wrapper">
        <div class="play-grid">
          <tic-tac-toe-box
            v-for="(square, indx) in squares"
            :key="indx"
            :sign="square"
            :finished="finished"
            :onClick="makeMove"
            :boxNumber="indx"
          />
        </div>
      </div>
    </div>
    <div class="col">
      <button @click="newGame()">Start New Game!</button>
      <h2>Options:</h2>
      <div class="options">
        <div class="checkbox-container">
          <input
            v-model="playWithAI"
            type="checkbox"
            value="Play with Computer"
            @change="toggleComputerPlay"
          />
          <label for="Play with Computer">Play with Computer</label>
        </div>

        <div v-if="playWithAI" class="checkbox-container">
          <input
            v-model="makeAiEasy"
            type="checkbox"
            value="Make AI Easy"
            @change="toggleComputerEasyPlay"
          />
          <label for="Make AI Easy">Make AI Easy</label>
        </div>

        <div v-if="playWithAI" class="checkbox-container">
          <input
            v-model="aiPlaysFirst"
            type="checkbox"
            value="AI plays first"
            @change="toggleAiFirstPlay"
          />
          <label for="AI plays first">AI plays first</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getAiMove, calculateWinnerOfBoard } from '~/assets/ts/AI-tictactoe'
import TicTacToeBox from '~/components/Boxes/TicTacToeBox.vue'

export default Vue.extend({
  components: { TicTacToeBox },
  data() {
    return {
      squares: Array(9).fill(undefined), // represents the board squares
      xIsNext: true, // contains if x is next or not
      winner: '', // contains the winner when it comes
      playWithAI: false, // contains whether the AI is playing or the computer is
      moves: 0, // contains the number of moves
      makeAiEasy: false, // contains the user input of easiness
      easyAI: false, // contains the difficulty level of AI
      aiPlaysFirst: false, // contains if the AI plays first or not
    }
  },
  computed: {
    /**
     * Gets which of the letter gets placed in the clicked box
     */
    player() {
      return this.finished ? '' : this.xIsNext ? 'X' : 'O'
    },
    /**
     * Gets if the game is finished or not
     */
    finished() {
      return this.winner !== '' || this.moves >= 9
    },
  },
  mounted() {
    // launching new game on mounting
    this.newGame()
  },
  methods: {
    /**
     * Resets the game to its default
     * The option of playing against AI is preserved
     * Easy AI option is also preserved
     * AI playing first is also preserved
     */
    newGame(): void {
      this.squares = Array(9).fill(undefined)
      this.winner = ''
      this.xIsNext = true
      this.moves = 0
      this.easyAI = false
      if (this.playWithAI && this.aiPlaysFirst) {
        this.selectBox(getAiMove(this.squares, this.player, this.easyAI))
        if (this.makeAiEasy) {
          this.easyAI = !this.easyAI
        }
      }
    },
    /**
     * Selects the box whose index is present
     * @param index number - which box to select
     */
    selectBox(index: number): void {
      this.squares.splice(index, 1, this.player)
      this.xIsNext = !this.xIsNext
      this.moves += 1
    },
    /**
     * Handles the user click along whether the AI moves or not
     * @param clickedIndex number - index of the box that is clicked
     */
    makeMove(clickedIndex: number): void {
      // check for fairness of move
      if (!this.finished && !this.squares[clickedIndex]) {
        this.selectBox(clickedIndex)
        this.winner = calculateWinnerOfBoard(this.squares)

        // if fair play => computer should play if selected
        if (this.playWithAI && !this.finished) {
          this.selectBox(getAiMove(this.squares, this.player, this.easyAI))
          if (this.makeAiEasy) {
            this.easyAI = !this.easyAI
          }
          this.winner = calculateWinnerOfBoard(this.squares)
        }
      }
    },
    /**
     * Handles the checkbox input
     * @param event - contains whether the checkbox was checked or not
     */
    toggleComputerPlay(event: any): void {
      this.playWithAI = event.target.checked
      this.easyAI = false
    },

    /**
     * Handles the checkbox input for easy option
     * @param event - contains whether the checkbox was checked or not
     */
    toggleComputerEasyPlay(event: any): void {
      this.makeAiEasy = event.target.checked
      this.easyAI = false
    },
    /**
     * Handles the checkbox input for the
     * @param event - contains whether the checkbox was checked or not
     */
    toggleAiFirstPlay(event: any): void {
      this.aiPlaysFirst = event.target.checked
      this.easyAI = false
      if (this.aiPlaysFirst && this.moves % 2 === 0) {
        this.selectBox(getAiMove(this.squares, this.player, this.easyAI))
        if (this.makeAiEasy) {
          this.easyAI = !this.easyAI
        }
      }
    },
  },
})
</script>
