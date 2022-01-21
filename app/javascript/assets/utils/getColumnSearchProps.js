import React, { useState } from "react";
import Highlighter from 'react-highlight-words';
import { Input, Button, Space } from "antd";
import { SearchOutlined } from '@ant-design/icons';

export const getColumnSearchProps = (enabled, inputRef, dataIndex) => {
  const [query, setQuery] = useState('');
  const [column, setColumn] = useState('');

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm({ closeDropdown: false });
    setQuery(selectedKeys[0]);
    setColumn(dataIndex);
  };

  const handleReset = (clearFilters, confirm) => {
    clearFilters();
    confirm({ closeDropdown: false });
    setQuery('');
    setColumn('');
  };

  return ({
    filterIcon: (filtered) => enabled && <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    filterDropdown: ({ selectedKeys, setSelectedKeys, confirm, clearFilters }) => (
      enabled &&
      <div style={{ padding: 8 }}>
        <Space>
          <Input
            ref={inputRef}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ display: 'block' }}
          />
          <Button
            // size="small"
            type="primary"
            style={{ width: 90 }}
            onClick={() => handleReset(clearFilters, confirm)}
          >
            Reset
          </Button>
        </Space>
      </div >
    ),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => inputRef.current.focus(), 300);
      }
    },
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    render: text =>
      column === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[query]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
};