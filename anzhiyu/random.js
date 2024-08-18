var posts=["2024/08/18/欢迎你，刘恒源/","2024/08/18/虚拟机搭建/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };