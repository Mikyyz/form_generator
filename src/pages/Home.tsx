import React, { useMemo, useState } from 'react';
import { Button, Col, Empty, Form, Row, Space, Typography } from '@douyinfe/semi-ui';
import { IconAppCenter, IconCopy, IconDelete, IconDownload, IconEdit, IconEyeOpened, IconMark, IconPlayCircle, IconTextRectangle } from '@douyinfe/semi-icons';
import { formConf, inputComponents } from '../components/generator/config';
import './index.scss';
import { LabelPosition } from '../types';
import { IllustrationNoResult } from '@douyinfe/semi-illustrations';

const { Text } = Typography;

const Home = () => {
  const [drawingList, setDrawingList] = useState([]);

  // 左侧面板widget列表
  const leftComponents = useMemo(() => {
    return [
      {
        title: '输入型组件',
        icon: <IconTextRectangle />,
        list: inputComponents
      },
      {
        title: '选择型组件',
        icon: <IconMark />,
        list: inputComponents,
      },
      {
        title: '布局型组件',
        icon:<IconAppCenter />,
        list: inputComponents,
      }
    ];
  }, [inputComponents]);

  return (
    <Row className="h-full wrapper" type="flex">
      <Col className="flex-auto box-border">
        <header className="header flex justify-between items-center pr-4 pl-4">
          <span className="font-bold text-blue-500">Form Generator</span>
          <Space>
            <Button icon={<IconPlayCircle />} theme="borderless">运行</Button>
            <Button icon={<IconEyeOpened />} theme="borderless">查看Json</Button>
            <Button icon={<IconDownload />} theme="borderless">导出React文件</Button>
            <Button icon={<IconCopy />} theme="borderless">复制代码</Button>
            <Button icon={<IconDelete />} type="danger" theme="borderless">清空</Button>
          </Space>
        </header>
        <section className="flex" style={{ height: 'calc(100vh - 44px)' }}>
          <aside className="aside overflow-auto">
            <div className="components-list">
              {leftComponents.map(component => (
                <div className="p-3 flex flex-col" key={component.title}>
                  <Space align="center" wrap={false}>
                    <span className="text-gray-800 pt-1">{component.icon}</span>
                    <Text>{component.title}</Text>
                  </Space>
                  <Space wrap={true} className="pt-2">
                    {component.list.map((element) => (
                      <div style={{ width: '48%' }} className="hover:text-blue-600 text-gray-700">
                        <div style={{ padding: '9px 10px' }} className="flex items-center hover:border-dashed hover:border-blue-600 cursor-move text-xs rounded bg-common border border-solid border-common">
                          {element.__config__.tagIcon}
                          <span className="pl-1">{element.__config__.label}</span>
                        </div>
                      </div>
                    ))}
                  </Space>
                </div>
              ))}
            </div>
          </aside>
          <section className="overflow-auto h-full p-3 box-border" style={{ width: 'calc(100% - 44px)' }}>
            <Row gutter={formConf.gutter} style={{ height: '100%' }}>
              {!drawingList.length ? (
                <Col span={formConf.span}>
                  <Form 
                    labelPosition={formConf.labelPosition as LabelPosition}
                    disabled={formConf.disabled}
                    labelWidth={formConf.labelWidth}>
                      <Form.Input label="用户名" field="username" />
                      <Form.Input label="用户名3333" field="username" />
                    </Form>
                </Col>
              ): (
                <Col span={24} className="h-full">
                  <Empty
                    image={<IllustrationNoResult style={{ width: 120, height: 120 }} />}
                    description={<span className="text-blue-500">从左侧拖入或点选组件进行表单设计</span>}
                    className="h-full flex justify-center items-center"
                  />
                </Col>
              )}
            </Row>
          </section>
        </section>
      </Col>
      <Col className="right-panel">

      </Col>
    </Row>
  );
};

export default Home;