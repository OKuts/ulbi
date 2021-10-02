import {useEffect, useMemo, useState} from 'react';
import {List} from '../components/List';
import {PostForm} from '../components/PostForm';
import {Filter} from '../components/filter/filter';
import {MyModal} from '../components/ui/myModal/MyModal';
import {MyButton} from '../components/ui/button/MyButton';
import {usePosts} from '../hooks/usePost';
import {apiPosts} from '../api/apiPosts';
import {useFetching} from '../hooks/useFetching';
import {getPageCount} from '../utils/getPageCount';
import {Pagination} from '../components/ui/pagination/Pagination';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({search: '', select: ''});
  const [modalVisible, setModalVisible] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [params, setParams] = useState({limit: 4, page: 1})

  const [fetchPosts, isPostsLoading, postError] = useFetching(async ()=> {
    const response = await apiPosts.getAll(params.limit, params.page);
    setPosts(response.data);
    const totalPosts = response.headers['x-total-count']
    setTotalPage(getPageCount(totalPosts, params.limit));
  })
  const sortedAndSearchedPosts = usePosts(posts, filter.select, filter.search);

  useEffect(() => fetchPosts(),[params.page])

  const createPost = (post) => {
    setPosts([...posts, post]);
    setModalVisible(false);
  }
  const removePost = (id) => setPosts(posts.filter(post => post.id !== id));

  return (
    <div className='App'>
      <MyButton style={{marginTop: 30}} onClick={() => setModalVisible(true)} children='Add post' />
      <hr/>
      <MyModal visible={modalVisible} setVisible={setModalVisible}>
        <PostForm  create = {createPost} setVisible={setModalVisible}/>
      </MyModal>
      <Filter filter = {filter} setFilter = {setFilter}/>
      {postError && <h1>{postError}</h1>}
      <List remove = {removePost} title='Post list' list={sortedAndSearchedPosts} isPostsLoading={isPostsLoading}/>
      <Pagination setParams={setParams} params={params} totalPage={totalPage}/>
    </div>
  )
}
