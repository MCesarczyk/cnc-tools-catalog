import React from "react";
import { Input, Button, Space } from "antd";
import { SearchOutlined } from '@ant-design/icons';

export const getColumnSearchProps = (enabled, inputRef) => ({
  filterIcon: (filtered) => enabled && <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  filterDropdown: () => (
    enabled &&
    <div style={{ padding: 8 }}>
      <Input
        ref={inputRef}
        placeholder={`Search`}
        style={{ marginBottom: 8, display: 'block' }}
      />
      <Space>
        <Button
          type="primary"
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90 }}
        >
          Search
        </Button>
        <Button
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
        <Button
          type="link"
          size="small"
        >
          Filter
        </Button>
      </Space>
    </div>
  ),
  onFilterDropdownVisibleChange: visible => {
    if (visible) {
      setTimeout(() => inputRef.current.focus(), 300);
    }
  },
});