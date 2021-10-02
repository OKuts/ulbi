import {useEffect, useMemo, useRef, useState} from 'react';
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
  const [params, setParams] = useState({limit: 5, page: 0})
  const lastElement = useRef();
  const observer = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async ()=> {
    const response = await apiPosts.getAll(params.limit, params.page);
    setPosts([...posts, ...response.data]);
    const totalPosts = response.headers['x-total-count']
    setTotalPage(getPageCount(totalPosts, params.limit));
  })

  const sortedAndSearchedPosts = usePosts(posts, filter.select, filter.search);

  useEffect(()=> {
    if (isPostsLoading) return;
    if (observer.current) observer.current.disconnect();
    var callback = function(entries, observer) {
      if (entries[0].isIntersecting && params.page < totalPage) {
        console.log('Div show');
        setParams({...params, page: params.page + 1})
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current)
  },[isPostsLoading])

  useEffect(() => fetchPosts(),[params.page])

  const createPost = (post) => {
    setPosts([...posts, post]);
    setModalVisible(false);
  }
  const removePost = (id) => setPosts(posts.filter(post => post.id !== id));

  return (
    <div className='App'>
      <MyButton style={{marginTop: 30}} onClick={() => setModalVisible(true)} children='Add post' />
      <MyModal visible={modalVisible} setVisible={setModalVisible}>
        <PostForm  create = {createPost} setVisible={setModalVisible}/>
      </MyModal>
      <Filter filter = {filter} setFilter = {setFilter}/>
      {postError && <h1>{postError}</h1>}
      <List remove = {removePost} title='Post list' list={sortedAndSearchedPosts} isPostsLoading={isPostsLoading}/>
      <div ref={lastElement} style={{padding: 5}}></div>
      {/*<Pagination setParams={setParams} params={params} totalPage={totalPage}/>*/}
    </div>
  )
}
