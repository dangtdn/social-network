import React, { useState, useEffect} from 'react';
import Comment from './Comment';
import ImagePost from './ImagePost';

const Post = () => {

    useEffect(() => {
        var modalImage = document.querySelector(".modal-box");
        var closeModal = document.querySelector(".btn-close-modal-box");
        var prevImage = document.querySelector(".modal-box-img-prev");
        var nextImage = document.querySelector(".modal-box-img-next");
        var ImageContainModal = document.querySelectorAll(".post-img");
        var ImageModalSelect = null;
        var ImageModal = null;
        var ImageShow = document.querySelector(".modal-box-img");
        var index = 0;
    
        function updateMedia(index){
            let ImageClone = ImageModal[index].cloneNode() || "";
            ImageShow.innerHTML = "";
            ImageShow.appendChild(ImageClone);
        }
    
        ImageContainModal.forEach(function(el, idx){
            el.addEventListener("click", function(){
                modalImage.classList.add("active");
    
                ImageModalSelect = this;
                ImageModal = this.querySelectorAll(".post-media>*");
                index = 0;
    
                updateMedia(index);
            });    
        });
    
    
        closeModal.addEventListener("click", function(){
            modalImage.classList.remove("active");
        });
    
        prevImage.addEventListener("click", function(){
            (index - 1 < 0) ? index = ImageModal.length - 1 : index = index-1 ;
    
            updateMedia(index);
        });
    
        nextImage.addEventListener("click", function(){
            (index + 1 > ImageModal.length - 1) ? index = 0 : index = index+1 ;
    
            updateMedia(index);
        });
      }, []);

    const [ImagesPost, setImagesPost] = useState([
        {
            urlImage: 'images/post-image-1.jpg'
        },
        {
            urlImage: 'images/post-image-2.jpg'
        },
        {
            urlImage: 'images/post-image-3.jpg'
        },
        {
            urlImage: 'images/post-image-4.jpg'
        },
        {
            urlImage: 'images/post-image-5.jpg'
        },
        {
            urlImage: 'images/post-image-6.jpg'
        },
        {
            urlImage: 'images/post-image-5.jpg'
        }
    ]);
    
    var modalImage = document.querySelector(".modal-box");
    var closeModal = document.querySelector(".btn-close-modal-box");
    var ImageModalSelect = null;
    var ImageModal = null;
    var ImageShow = document.querySelector(".modal-box-img");
    var index = 0;


    return (
        <div className="post-contain mt-5">
            <h5 className="post-status">
                <i className='bx bx-refresh' ></i> Daniel Jensen retweeted
            </h5>
            <div className="post box-shadow border-radius">
                <div className="user-post d-inline-flex">
                    <div className="post-user-img user-img">
                        <img className="border-radius" src="images/user.jpg" alt="Image of User" />
                    </div>
                    <div className="post-user-info">
                        <span className="post-user-name user-name d-block color-black">Xanhthe Neal</span>
                        <span className="post-user-time d-block">24 August at 20:43</span>
                    </div>                           
                </div>
                <p className="post-content mt-3">
                    Traveling – it leaves you speechless, then turns you into a storyteller.
                </p>
                <div
                    className="post-img d-flex border-radius flex-wrap"
                >
                    {
                        ImagesPost.map((image, index) => 
                            <ImagePost
                                urlImage={image.urlImage}
                                key={index}
                                idx={index}
                                total={ImagesPost.length}
                            />
                        )
                    }
                </div>
                <div className="post-info mt-3">
                    <ul className="d-flex justify-content-end flex-wrap post-user-time">
                        <li>
                            417 Comments
                        </li>
                        <li className="mx-3">
                            59k Retweeted
                        </li>
                        <li>
                            234 Saved
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="post-info-btn">
                    <ul className="d-flex justify-content-center flex-wrap">
                        <li>
                            <i className='bx bx-message' ></i> <span className="d-none d-md-inline-block">Comment</span>
                        </li>
                        <li>
                            <i className='bx bx-refresh'></i> <span className="d-none d-md-inline-block">Retweeted</span>
                        </li>
                        <li>
                            <i className='bx bx-heart' ></i> <span className="d-none d-md-inline-block">Liked</span>
                        </li>
                        <li>
                            <i className='bx bx-bookmark'></i> <span className="d-none d-md-inline-block">Saved</span>
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="post-comment-box d-flex flex-wrap align-items-center">
                    <div className="post-user-img user-img">
                        <img className="border-radius" src="images/user.jpg" alt="Image of User" />
                    </div>
                    <div className="form-group flex-fill w-50 post-comment-form border-radius overflow-hidden">
                        <div className="input-group">
                            <input type="text" className="form-control shadow-none py-3" placeholder="Tweet your reply" />
                            <label className="input-group-text" htmlFor="inputGroupFile01"><i className='bx bx-bx bxs-image-alt'></i></label>
                            <input type="file" className="form-control d-none" id="inputGroupFile01" />
                            <label className="input-group-text">
                                <i className='bx bx-send' ></i>
                            </label>
                        </div>
                    </div>
                </div>
                <hr />
                <Comment
                    cmtId="1"
                    userImg="images/user.jpg"
                    userName="Waqar Bloom" 
                    cmtContent="I’ve seen awe-inspiring things that I thought I’d never be able to explain to another person."
                    isLike={true}
                    cmtDate="2020/03/25"
                />
            </div>
            <div className="modal-box">
                <div className="modal-box-img">
                    <img src="images/post-image-1.jpg" alt="Image of post" />
                </div>
                <div className="btn-close-modal-box"><i className='bx bx-x' ></i></div>
                <div
                    className="modal-box-img-prev modal-box-img-control"
                >
                    <i className='bx bx-caret-left-circle' ></i>
                </div>
                <div className="modal-box-img-next modal-box-img-control"><i className='bx bx-caret-right-circle' ></i></div>
            </div>
        </div>
    );
};

export default Post;