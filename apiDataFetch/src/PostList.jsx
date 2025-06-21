import React, { useState, useEffect } from 'react';

const PostList = () => {
  const [postData, setPostData] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  // 🔄 Fetch post data from API on mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPostData(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  // 🔁 Update selectedPost when selectedId changes
  useEffect(() => {
    const id = parseInt(selectedId);
    const foundPost = postData.find((post) => post.id === id);
    setSelectedPost(foundPost || null);
  }, [selectedId, postData]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Select Post ID</h1>

      <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        className="border p-2 mb-4"
      >
        <option value="">-- Select ID --</option>
        {postData.map((post) => (
          <option key={post.id} value={post.id}>
            {post.id}
          </option>
        ))}
      </select>

      {selectedPost ? (
        <div className="border p-4 rounded shadow bg-white">
          <h2 className="text-xl font-semibold text-blue-700">{selectedPost.title}</h2>
          <p className="mt-2 whitespace-pre-line text-gray-700">{selectedPost.body}</p>
        </div>
      ) : (
        selectedId && <p className="text-red-500">No post found with that ID.</p>
      )}
    </div>
  );
};

export default PostList;
