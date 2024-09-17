import useFetch from "../../hooks/use-fetch";

function CommentsList() {

    const {data, loading} = useFetch('https://dummyjson.com/comments');
    if (loading) <h1>Fetchin Comments! Please Wait</h1>;

    return(
        <div>
            <h1>Comments List Page</h1>
            <ul>
                {
                    data?.comments?.length > 0 
                    ? data?.comments.map(commentItem=> 
                    (<div>
                        <label>{commentItem?.body}</label>
                        <p>{commentItem?.likes}</p>
                    </div>
                    ))
                    :null
                }
            </ul>
        </div>
    )
}
export default CommentsList;