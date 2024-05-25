import { Button, Col, Divider, Image, Row, Space, Typography } from "antd";
import React from "react";
import styles from "./Group.module.css";
import Title from "antd/es/typography/Title";
import { Add, Reply } from "@mui/icons-material";

const { Text } = Typography;
const GroupDetail = () => {
  return (
    <div>
      <Row className={styles.banner} justify={"center"}>
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
            <li>Bài viết</li>
            <li>Thành viên</li>
            <li>File phương tiện</li>
          </ul>
        </Col>
      </Row>
      <Divider />
    </div>
  );
};

export default GroupDetail;
