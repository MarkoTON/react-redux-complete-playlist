// It needs to be only deletePost, but I added 'Test' to see path of calling this function
export const deletePostTest = (id) => {
  return {
    type: 'DELETE_POST',
    id
  }
}