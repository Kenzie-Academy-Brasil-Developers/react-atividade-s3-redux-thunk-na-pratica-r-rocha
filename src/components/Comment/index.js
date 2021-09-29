import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";
import "./style.css"

const Comment = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addCommentThunk(data.comment));
    reset();
  };

  const comment = useSelector((state) => state);

  return (
    <div className="container">
      {comment.user.comments.map((elem, index) => (
        <p key={index} className="comment">{elem}</p>
      )
      )}
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="comment">Add a public comment: </label>
        <input id="comment" {...register("comment", { required: true })} />
        <button className="btn-grad" type="submit">Send</button>
          {errors.name && errors.comment.type === "required" && (<p className="error">This is required</p>)}
      </form>
    </div>
  );
};

export default Comment;
