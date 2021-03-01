/*
Navicat MySQL Data Transfer

Source Server         : test
Source Server Version : 80021
Source Host           : localhost:3306
Source Database       : mydb

Target Server Type    : MYSQL
Target Server Version : 80021
File Encoding         : 65001

Date: 2021-03-01 15:13:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `apply`
-- ----------------------------
DROP TABLE IF EXISTS `apply`;
CREATE TABLE `apply` (
  `a_id` int NOT NULL AUTO_INCREMENT,
  `a_name` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `a_major` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `a_soccer` float(10,0) DEFAULT NULL,
  `a_date` datetime DEFAULT NULL,
  `a_s_id` int DEFAULT NULL,
  `a_state` bit(1) DEFAULT NULL,
  PRIMARY KEY (`a_id`),
  KEY `a_s_id` (`a_s_id`),
  CONSTRAINT `apply_ibfk_1` FOREIGN KEY (`a_s_id`) REFERENCES `student` (`s_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of apply
-- ----------------------------

-- ----------------------------
-- Table structure for `exam`
-- ----------------------------
DROP TABLE IF EXISTS `exam`;
CREATE TABLE `exam` (
  `e_id` int NOT NULL AUTO_INCREMENT,
  `e_name` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `e_admission` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `e_date` datetime DEFAULT NULL,
  `e_nation` varchar(10) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `e_sex` bit(1) DEFAULT NULL,
  `e_major` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `e_place` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `e_address` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `e_idno` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `e_s_id` int DEFAULT NULL,
  PRIMARY KEY (`e_id`),
  KEY `e_s_id` (`e_s_id`),
  CONSTRAINT `exam_ibfk_1` FOREIGN KEY (`e_s_id`) REFERENCES `student` (`s_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of exam
-- ----------------------------

-- ----------------------------
-- Table structure for `letter`
-- ----------------------------
DROP TABLE IF EXISTS `letter`;
CREATE TABLE `letter` (
  `l_id` int NOT NULL AUTO_INCREMENT,
  `l_name` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `l_address` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `l_state` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `l_orderid` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `l_s_id` int DEFAULT NULL,
  PRIMARY KEY (`l_id`),
  KEY `l_s_id` (`l_s_id`),
  CONSTRAINT `letter_ibfk_1` FOREIGN KEY (`l_s_id`) REFERENCES `student` (`s_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of letter
-- ----------------------------

-- ----------------------------
-- Table structure for `plane`
-- ----------------------------
DROP TABLE IF EXISTS `plane`;
CREATE TABLE `plane` (
  `p_id` int NOT NULL AUTO_INCREMENT,
  `p_name` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `p_number` int DEFAULT NULL,
  `p_mj_name` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `p_mj_id` int DEFAULT NULL,
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of plane
-- ----------------------------
INSERT INTO `plane` VALUES ('1', '机电学院', '468', '机械类', '802');
INSERT INTO `plane` VALUES ('2', '机电学院', '84', '测控技术与仪器', '80301');
INSERT INTO `plane` VALUES ('3', '机电学院', '73', '工业工程', '120701');
INSERT INTO `plane` VALUES ('4', '自动化学院', '293', '自动化', '80801');
INSERT INTO `plane` VALUES ('5', '自动化学院', '223', '电气工程及其自动化', '80601');
INSERT INTO `plane` VALUES ('6', '自动化学院', '86', '物联网工程', '80905');
INSERT INTO `plane` VALUES ('7', '自动化学院', '90', '数据科学与大数据技术', '80910');
INSERT INTO `plane` VALUES ('8', '轻工化工学院', '177', '化学工程与工艺', '81301');
INSERT INTO `plane` VALUES ('9', '轻工化工学院', '159', '应用化学', '70302');
INSERT INTO `plane` VALUES ('10', '轻工化工学院', '72', '食品科学与工程', '82701');
INSERT INTO `plane` VALUES ('11', '信息学院', '519', '电子信息类', '807');
INSERT INTO `plane` VALUES ('12', '土木与交通学院', '434', '土木类', '810');
INSERT INTO `plane` VALUES ('13', '土木与交通学院', '30', '测绘工程', '81201');
INSERT INTO `plane` VALUES ('14', '土木与交通学院', '35', '交通运输', '81801');
INSERT INTO `plane` VALUES ('15', '土木与交通学院', '80', '工程管理', '120103');
INSERT INTO `plane` VALUES ('16', '计算机学院', '203', '计算机科学与技术', '80901');
INSERT INTO `plane` VALUES ('17', '计算机学院', '202', '软件工程', '80902');
INSERT INTO `plane` VALUES ('18', '计算机学院', '167', '网络工程', '80903');
INSERT INTO `plane` VALUES ('19', '计算机学院', '92', '信息安全', '80904');
INSERT INTO `plane` VALUES ('20', '材料与能源学院', '279', '材料类', '804');
INSERT INTO `plane` VALUES ('21', '材料与能源学院', '124', '材料成型及控制工程', '80203');
INSERT INTO `plane` VALUES ('22', '材料与能源学院', '181', '能源与动力工程', '80501');
INSERT INTO `plane` VALUES ('23', '材料与能源学院', '100', '微电子科学与工程', '80704');
INSERT INTO `plane` VALUES ('24', '环境科学与工程学院', '187', '环境科学与工程类', '825');
INSERT INTO `plane` VALUES ('25', '环境科学与工程学院', '30', '安全工程', '82901');
INSERT INTO `plane` VALUES ('26', '外语学院', '140', '外国语言文学类', '502');
INSERT INTO `plane` VALUES ('27', '外语学院', '30', '日语', '50207');
INSERT INTO `plane` VALUES ('28', '物理学院', '160', '电子科学与技术', '80702');
INSERT INTO `plane` VALUES ('29', '物理学院', '175', '光电信息科学与工程', '80705');
INSERT INTO `plane` VALUES ('30', '生物医药学院', '80', '制药工程', '81302');
INSERT INTO `plane` VALUES ('31', '生物医药学院', '64', '生物工程', '83001');
INSERT INTO `plane` VALUES ('32', '管理学院', '335', '工商管理类', '1202');
INSERT INTO `plane` VALUES ('33', '管理学院', '190', '会计学', '120203');
INSERT INTO `plane` VALUES ('34', '管理学院', '147', '电子商务', '120801');
INSERT INTO `plane` VALUES ('35', '管理学院', '177', '信息管理与信息系统', '120102');
INSERT INTO `plane` VALUES ('36', '管理学院', '5', '房地产开发与管理', '120104');
INSERT INTO `plane` VALUES ('37', '管理学院', '20', '土地资源管理', '120404');
INSERT INTO `plane` VALUES ('38', '应用数学学院', '195', '数学类', '701');
INSERT INTO `plane` VALUES ('39', '应用数学学院', '60', '应用统计学', '71202');
INSERT INTO `plane` VALUES ('40', '政法学院', '83', '法学', '30101');
INSERT INTO `plane` VALUES ('41', '政法学院', '4', '社会工作', '30302');
INSERT INTO `plane` VALUES ('42', '经济与贸易学院', '120', '金融学类', '203');
INSERT INTO `plane` VALUES ('43', '经济与贸易学院', '74', '经济学', '20101');
INSERT INTO `plane` VALUES ('44', '经济与贸易学院', '66', '国际经济与贸易', '20401');
INSERT INTO `plane` VALUES ('45', '艺术与设计学院', '100', '工业设计', '80205');
INSERT INTO `plane` VALUES ('46', '艺术与设计学院', '60', '数字媒体技术', '80906');
INSERT INTO `plane` VALUES ('47', '建筑与城市规划学院', '66', '建筑学', '82801');
INSERT INTO `plane` VALUES ('48', '建筑与城市规划学院', '70', '城乡规划', '82802');
INSERT INTO `plane` VALUES ('49', '建筑与城市规划学院', '35', '风景园林', '82803');

-- ----------------------------
-- Table structure for `student`
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `s_id` int NOT NULL AUTO_INCREMENT,
  `s_name` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `s_sex` bit(1) DEFAULT NULL,
  `s_nation` varchar(10) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `s_idno` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `s_major` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `s_telephone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `s_address` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `s_password` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `s_state` bit(1) DEFAULT NULL,
  PRIMARY KEY (`s_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of student
-- ----------------------------

-- ----------------------------
-- Table structure for `teacher`
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `t_Id` int NOT NULL AUTO_INCREMENT,
  `t_name` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `t_sex` bit(1) DEFAULT NULL,
  `t_telephone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `t_password` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`t_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES ('3', '1', null, null, '1');
INSERT INTO `teacher` VALUES ('4', '12', null, '12231', '113');
INSERT INTO `teacher` VALUES ('5', '12', null, '12231', '113');
INSERT INTO `teacher` VALUES ('6', '12', null, '12231', '113');
INSERT INTO `teacher` VALUES ('7', '13', null, '13', '14');
INSERT INTO `teacher` VALUES ('8', '123', null, '132', '1243');
INSERT INTO `teacher` VALUES ('9', '1', null, '1', '1');
INSERT INTO `teacher` VALUES ('10', '1111111', null, '156154', '123456');
INSERT INTO `teacher` VALUES ('11', 'admin', null, '', '123456');
