import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-elastic-carousel";

import BlogLayout from "./../../components/layout/BlogLayout";
import BlogPostCover from "./../../components/blogPostCover/BlogPostCover";
import BlogPostSec from "./../../components/blogPostSec/BlogPostSec";
import BlogForm from "./../../components/blogForm/BlogForm";
import BlogComments from "./../../components/blogComments/BlogComments";
import BlogInfo from "./../../components/blogInfo/BlogInfo";
import Sidebar from "../../components/blogSidebar/Sidebar";
import RecLine from "../../components/titleRecLine/RecLine";
import BlogCard from "../../components/card/BlogCard";

import { posts } from "./Posts";

const BlogPost = () => {
  const singlePost = posts[1];

  return (
    <>
      <BlogLayout>
        <Container>
          <Row className="mt-5 px-4">
            <Col xs={12} sm={12} md={12} lg={8}>
              <RecLine
                title={singlePost.title}
                size="lg"
                titleColor="#0876DD"
              />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col
              xs={{ order: 2, span: 12 }}
              sm={{ order: 2, span: 12 }}
              md={{ order: 1, span: 7 }}
              lg={{ order: 1, span: 8 }}
              className="px-4"
            >
              <BlogPostCover
                imgUrl={singlePost.coverImg}
                imgAlt="cover"
                imgWidth="80%"
                author={singlePost.author}
                likes={singlePost.likes}
                comments={singlePost.commentsNum}
                date={singlePost.date}
              />
              <BlogPostSec parag={singlePost.content} />
              {singlePost.sections.map((post, index) => (
                <BlogPostSec
                  key={index}
                  title={post.title}
                  imgsArray={post.images}
                  parag={post.content}
                />
              ))}
              <BlogInfo
                author={singlePost.author}
                date={singlePost.date}
                tags={singlePost.tags}
              />
            </Col>
            <Col
              xs={{ order: 1, span: 10 }}
              sm={{ order: 1, span: 8 }}
              md={{ order: 2, span: 5 }}
              lg={{ order: 2, span: 4 }}
              className="px-4 mx-auto"
            >
              <Sidebar />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col xs={12} sm={12} md={6} lg={6} className="px-4 mb-5 mb-md-0">
              <RecLine title="ثبت دیدگاه" size="sm" titleColor="#0876DD" />
              <BlogForm style={{ marginTop: "2rem" }} />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="px-4">
              <RecLine title="نظرات کاربران" size="sm" titleColor="#292929" />
              <BlogComments
                style={{ marginTop: "2rem" }}
                comments={[
                  {
                    title: "محمدرضا",
                    content: "این مطلب برای من خیلی مفید بود.",
                  },
                  {
                    title: "فاطمه",
                    content:
                      "این مطلب برای من خیلی من خیلی من خیلی من خیلی من خیلی من خیلی من خیلی من خیلی مفید بود.",
                  },
                  { title: "سعید", content: "این مطلب برای من خیلی مفید بود." },
                  {
                    title: "محمدرضا",
                    content: "این مطلب برای من خیلی مفید بود.",
                  },
                  { title: "حسین", content: "این مطلب برای من خیلی مفید بود." },
                  { title: "امین", content: "این مطلب برای من خیلی مفید بود." },
                ]}
              />
            </Col>
          </Row>

          <Row className="mt-5">
            <RecLine title="مقالات مرتبط" size="sm" titleColor="#292929" />
            <Carousel
              breakPoints={[
                {
                  width: 1,
                  itemsToShow: 1,
                },
                {
                  width: 576,
                  itemsToShow: 2,
                },
                {
                  width: 792,
                  itemsToShow: 3,
                },
                {
                  width: 1100,
                  itemsToShow: 4,
                },
              ]}
              enableAutoPlay
              itemPadding={[1, 1]}
              outerSpacing={0}
              pagination={false}
              isRTL={true}
            >
              <BlogCard
                style={{
                  margin: "1.5rem  .5rem",
                }}
                link="#"
                date="23 شهریور"
              />
              <BlogCard
                style={{
                  margin: "1.5rem  .5rem",
                }}
                link="#"
                date="23 شهریور"
              />
              <BlogCard
                style={{
                  margin: "1.5rem  .5rem",
                }}
                link="#"
                date="23 شهریور"
              />
              <BlogCard
                style={{
                  margin: "1.5rem  .5rem",
                }}
                link="#"
                date="23 شهریور"
              />
              <BlogCard
                style={{
                  margin: "1.5rem  .5rem",
                }}
                link="#"
                date="23 شهریور"
              />
            </Carousel>
          </Row>
        </Container>
      </BlogLayout>
    </>
  );
};

export default BlogPost;
