import { addComment } from "./actions";

// o coment é o que recebemos de fora, no caso será o comentário
export const addCommentThunk = (comment) => {
  // No thunk retornamos uma função anônima
  return (dispatch, getState) => {
    // Aqui estamos pegando o state user
    const { user } = getState();

    // Aqui adicionamos o comentário que entrou como parâmetro
    const updateUser = { ...user, comments: [...user.comments, comment] };

    // Nessa linha damos o dispatch na nossa action, com a alteração feita
    dispatch(addComment(updateUser));
  };
};