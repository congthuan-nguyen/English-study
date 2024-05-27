import { Button, Col, Divider, Image, Row, Space, Typography } from "antd";
import React from "react";
import styles from "./Group.module.css";
import Title from "antd/es/typography/Title";
import { Add, Reply } from "@mui/icons-material";
import Posts from "../post/Posts";
import { GlobalOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import PostNew from "../post/PostNew";

const { Text } = Typography;
const GroupDetail = () => {
  return (
    <div>
      <Row className={`${styles.banner} bcb-green`} justify={"center"}>
        <Col span={18}>
          <Image
            height={480}
            width={"100%"}
            style={{ backgroundSize: "cover" }}
            src="https://thumbs.dreamstime.com/z/english-language-hand-drawn-doodles-lettering-education-banner-vector-illustration-134022507.jpg"
          />
          <div className="m-32">
            <Title level={3}>Tên nhóm học được đặt tên do người dùng</Title>
            <Text type="secondary">
              Nhóm học TOEIC của chúng tôi là cộng đồng năng động gồm những
              người học nhiệt huyết, cùng nhau nâng cao kỹ năng tiếng Anh. Với
              tài liệu phong phú và các buổi thảo luận hiệu quả, chúng tôi hỗ
              trợ lẫn nhau để đạt điểm cao trong kỳ thi TOEIC. Tham gia nhóm,
              bạn sẽ có cơ hội thực hành nghe, nói, đọc, viết thông qua các hoạt
              động đa dạng. Hãy cùng chúng tôi chinh phục mục tiêu TOEIC!
            </Text>
            <div className="mt-16">
              <Space>
                <Button className="fac">
                  Mời <Add />
                </Button>
                <Button className="fac">
                  Chia sẻ <Reply style={{ transform: "scaleX(-1)" }} />
                </Button>
              </Space>
            </div>
          </div>
          <ul className={styles.menu}>
            <li className={styles.menuItemActive}>Bài viết</li>
            <li>Thành viên</li>
            <li>File phương tiện</li>
          </ul>
        </Col>
      </Row>
      <Row justify={"center"} className="bg-gg ">
        <Col span={18}>
          <Row>
            <Col span={6} className="mtb-16">
              <div className={`${styles.introduce} bg-wh`}>
                <Title level={4} className="m-0">
                  Giới thiệu
                </Title>
                <Row>
                  <Col span={10}>
                    <Title level={5}>Tên nhóm</Title>
                  </Col>
                  <Col span={14}>
                    <Text type="secondary">
                      Tên nhóm học được đặt tên do người dùng
                    </Text>
                  </Col>
                  <Col span={10}>
                    <Title level={5}>Quyền riêng tư</Title>
                  </Col>
                  <Col span={14}>
                    <Text type="secondary">
                      Công khai
                      <GlobalOutlined className="ms-8" />
                    </Text>
                  </Col>
                  <Col span={10}>
                    <Title level={5}>Thành viên</Title>
                  </Col>
                  <Col span={14}>
                    <Text type="secondary">
                      Bao gồm 200.000 thành viên <UsergroupAddOutlined />
                    </Text>
                  </Col>
                  <Col span={10}>
                    <Title level={5}>Giới thiệu</Title>
                  </Col>
                  <Col span={14} style={{ textAlign: "justify" }}>
                    <Text type="secondary">
                      Nhóm học TOEIC của chúng tôi là cộng đồng năng động gồm
                      những người học nhiệt huyết, cùng nhau nâng cao kỹ năng
                      tiếng Anh. Với tài liệu phong phú và các buổi thảo luận
                      hiệu quả, chúng tôi hỗ trợ lẫn nhau để đạt điểm cao trong
                      kỳ thi TOEIC. Tham gia nhóm, bạn sẽ có cơ hội thực hành
                      nghe, nói, đọc, viết thông qua các hoạt động đa dạng. Hãy
                      cùng chúng tôi chinh phục mục tiêu TOEIC!
                    </Text>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={18}>
              <div className="mse-32">
                <PostNew className={"mtb-16"} />
              </div>
              <div className={`${styles.postGroup} ovfy_scr`}>
                <div className="mb-16">
                  <Posts />
                </div>
                <div className="mb-16">
                  <Posts />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default GroupDetail;
