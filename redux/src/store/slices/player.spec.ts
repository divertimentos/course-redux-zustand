import { describe, expect, it } from "vitest";
import { next, play, PlayerState, player as reducer } from "./player";

const mockedState: PlayerState = {
  course: {
    id: 1,
    modules: [
      {
        id: 1,
        title: "Iniciando com React",
        lessons: [
          { id: "Jai8w6K_GnY", title: "CSS Modules", duration: "13:45" },
          {
            id: "w-DW4DhDfcw",
            title: "Estilização do Post",
            duration: "10:05",
          },
        ],
      },
      {
        id: 2,
        title: "Estrutura da aplicação",
        lessons: [
          {
            id: "gE48FQXRZ_o",
            title: "Componente: Comment",
            duration: "13:45",
          },
          { id: "Ng_Vk4tBl0g", title: "Responsividade", duration: "10:05" },
        ],
      },
    ],
  },

  isLoading: false,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
};

describe("player slice", () => {
  it("should be able to play", () => {
    const state = reducer(mockedState, play([1, 2]));

    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(2);
  });

  it("should be able to next video automatically", () => {
    const state = reducer(mockedState, next());

    expect(state.currentModuleIndex).toEqual(0);
    expect(state.currentLessonIndex).toEqual(1);
  });

  it("should be able to jump to the next module automatically", () => {
    const state = reducer(
      {
        ...mockedState,
        currentLessonIndex: 1,
      },
      next(),
    );

    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(0);
  });

  it("shouldn't update the current module and lesson index if there's no next lesson available", () => {
    const state = reducer(
      {
        ...mockedState,
        currentModuleIndex: 1,
        currentLessonIndex: 1,
      },
      next(),
    );

    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(1);
  });
});
