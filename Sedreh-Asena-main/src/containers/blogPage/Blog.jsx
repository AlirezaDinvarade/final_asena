import React from "react";
import { Container, Row , Col } from "react-bootstrap";

import BlogLayout from "./../../components/layout/BlogLayout";
import Carousel from "react-elastic-carousel";

import RecLine from "../../components/titleRecLine/RecLine";
import BlogCard from "../../components/card/BlogCard";
import Sidebar from "../../components/blogSidebar/Sidebar";
import BlogCarousel from "../../components/blogCarousel/BlogCarousel";
import SelectedPost from "./../../components/selectedPosts/SelectedPost";

import "./blog.css";

import { posts } from "./Posts";

const Blog = () => {
  return (
    <>
      <BlogLayout>

        <SelectedPost
          title={posts[1].title}
          summery={posts[1].content}
          img={posts[1].coverImg}
          date={posts[1].date}
          comments={posts[1].commentsNum}
          likes={posts[1].likes}
        />

        <Container>
          <Row className="mt-4">
            <Col xs={12} sm={8} md={6} lg={3}>
              <Sidebar />
            </Col>
            <Col xs={12} sm={12} md={12} lg={9}>
            <RecLine
              title="پر بازدیدترین"
              linkTitle="بیشتر"
              link="#"
              size="sm"
              titleColor="#292929"
            />
            <Carousel
              breakPoints={[
                {
                  width: 1,
                  itemsToShow: 1,
                },
                {
                  width: 492,
                  itemsToShow: 2,
                },
                {
                  width: 792,
                  itemsToShow: 3,
                },
              ]}
              itemPadding={[1, 1]}
              outerSpacing={0}
              pagination={false}
              isRTL={true}
              
            >
              {posts.map((post,index)=> <BlogCard
                key={index}
                style={{
                  margin: "1.5rem  .5rem",
                }}
                link="#"
                date={post.date}
                title={post.title}
                content={post.content}
                img={post.coverImg}
              />)}
             
            </Carousel>
            <RecLine title="آلودگی هوا" size="sm" titleColor="#292929" />
            <BlogCarousel posts={posts} />
            </Col>
          </Row>

        </Container>
       

        <Container>
          
          <Row className="mt-4">
           
              <RecLine
                title="آخرین مقالات"
                linkTitle="بیشتر"
                link="#"
                size="sm"
                titleColor="#292929"
              />
              <Carousel
            breakPoints={[
              {
                width: 1,
                itemsToShow: 1,
              },
              {
                width: 576,
                itemsToShow: 3,
              },
              {
                width: 992,
                itemsToShow: 4,
              },
              {
                width: 1200,
                itemsToShow: 4,
              },
            ]}
            pagination={false}
            isRTL={true}
          >
            {posts.map((post,index)=> <BlogCard
                key={index}
                style={{
                  margin: "1.5rem  .5rem",
                }}
                link="#"
                date={post.date}
                title={post.title}
                content={post.content}
                img={post.coverImg}
              />)}
          </Carousel>
          </Row>
        </Container>

      
      </BlogLayout>
    </>
  );
};

export default Blog;
