import tkinter
from tkinter import messagebox

P1T = None
P2T = None
Btn1x1 = None
Btn1x2 = None
Btn1x3 = None
Btn2x1 = None
Btn2x2 = None
Btn2x3 = None
Btn3x1 = None
Btn3x2 = None
Btn3x3 = None

Btns = [["", "", ""], ["", "", ""], ["", "", ""]]
PlayerTurn = 'x'

isGameOver = False

#.configure(state=DISABLED)


def Winner(I):
  if ((Btns[0][0] == I) and (Btns[0][1] == I) and (Btns[0][2] == I)) or (
    (Btns[1][0] == I) and (Btns[1][1] == I) and (Btns[1][2] == I)) or (
      (Btns[2][0] == I) and (Btns[2][1] == I) and (Btns[2][2] == I)) or (
        (Btns[0][0] == I) and (Btns[1][0] == I) and
        (Btns[2][0] == I)) or ((Btns[0][1] == I) and (Btns[1][1] == I) and
                               (Btns[2][1] == I)) or (
                                 (Btns[0][2] == I) and (Btns[1][2] == I) and
                                 (Btns[2][2] == I)) or (
                                   (Btns[0][0] == I) and (Btns[1][1] == I) and
                                   (Btns[2][2] == I)) or ((Btns[2][0] == I) and
                                                          (Btns[1][1] == I) and
                                                          (Btns[0][2] == I)):
    return True
  else:
    return False


def checkScore():
  if Winner("x"):
    print('x')
    messagebox.showinfo("There is a Winner", "Player 1 won the game")
  elif Winner("o"):
    print('o')
    messagebox.showinfo("There is a Winner", "Player 2 won the game")
  elif isFull():
    print('f')
    messagebox.showinfo("Draw game", "Tie Game")


def isFull():
  for r in range(len(Btns)):
    for c in range(len(Btns[r])):
      if (Btns[r][c] == ""):
        return False
  return True


def placeXO(Btn, pos):
  global PlayerTurn, Btns
  Btn.config(text=PlayerTurn, state="disabled")
  Btns[int(pos[0]) - 1][int(pos[2]) - 1] = PlayerTurn
  if (PlayerTurn == "x"):
    Btn.config(bg="green", disabledforeground="Black")
    PlayerTurn = "o"
  else:
    Btn.config(bg="red", disabledforeground="Black")

    PlayerTurn = "x"

  checkScore()


### Thats Creats a GUI of the board ###
def gameBoard():
  global P1T, P2T, Btn1x1, Btn1x2, Btn1x3, Btn2x1, Btn2x2, Btn2x3, Btn3x1, Btn3x2, Btn3x3, Btns
  P1T = tkinter.Label(
    main_window,
    text="Player 1: X",
    # width=20,
    font=["Arial", 12],
    bg="Green")
  P2T = tkinter.Label(
    main_window,
    text="Player 2: O",
    # width=20,
    font=["Arial", 12],
    bg="Red")
  Btn1x1 = tkinter.Button(main_window,
                          command=lambda: placeXO(Btn1x1, "1x1"),
                          text=Btns[0][0],
                          width=8,
                          height=5)
  Btn1x2 = tkinter.Button(main_window,
                          command=lambda: placeXO(Btn1x2, "1x2"),
                          text=Btns[0][1],
                          width=8,
                          height=5)
  Btn1x3 = tkinter.Button(main_window,
                          command=lambda: placeXO(Btn1x3, "1x3"),
                          text=Btns[0][2],
                          width=8,
                          height=5)
  Btn2x1 = tkinter.Button(main_window,
                          command=lambda: placeXO(Btn2x1, "2x1"),
                          text=Btns[1][0],
                          width=8,
                          height=5)
  Btn2x2 = tkinter.Button(main_window,
                          command=lambda: placeXO(Btn2x2, "2x2"),
                          text=Btns[1][1],
                          width=8,
                          height=5)
  Btn2x3 = tkinter.Button(main_window,
                          command=lambda: placeXO(Btn2x3, "2x3"),
                          text=Btns[1][2],
                          width=8,
                          height=5)
  Btn3x1 = tkinter.Button(main_window,
                          command=lambda: placeXO(Btn3x1, "3x1"),
                          text=Btns[2][0],
                          width=8,
                          height=5)
  Btn3x2 = tkinter.Button(main_window,
                          command=lambda: placeXO(Btn3x2, "3x2"),
                          text=Btns[2][1],
                          width=8,
                          height=5)
  Btn3x3 = tkinter.Button(main_window,
                          command=lambda: placeXO(Btn3x3, "3x3"),
                          text=Btns[2][2],
                          width=8,
                          height=5)
  # Btns = [[Btn1x1, Btn1x2, Btn1x3], [Btn2x1, Btn2x2, Btn2x3],
  #         [Btn3x1, Btn3x2, Btn3x3]]
  ### Place Widget ###
  P1T.grid(row=1, column=2)
  P2T.grid(row=2, column=2)

  ## First Row ##
  Btn1x1.grid(row=1 + 2, column=1)
  Btn1x2.grid(row=1 + 2, column=2)
  Btn1x3.grid(row=1 + 2, column=3)

  ## Second row ##
  Btn2x1.grid(row=2 + 2, column=1)
  Btn2x2.grid(row=2 + 2, column=2)
  Btn2x3.grid(row=2 + 2, column=3)

  ## Third Row ##
  Btn3x1.grid(row=3 + 2, column=1)
  Btn3x2.grid(row=3 + 2, column=2)
  Btn3x3.grid(row=3 + 2, column=3)


### Creating main window ###
main_window = tkinter.Tk()
main_window.title("Tic Tac Toe")

### Place The GUI ###
gameBoard()

main_window.mainloop()