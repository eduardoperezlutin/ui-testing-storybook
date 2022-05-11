import { localStorageManager } from '@chakra-ui/react';
import { m } from 'framer-motion';
import React from 'react';
import { Task } from './Task';

export default {
  component: Task,
  title: 'Task',
  argTypes: {
    onArchiveTask: { action: 'onArchiveTask' },
    onTogglePinTask: { action: 'onTogglePinTask' },
    onEditTitle: { action: 'onEditTitle' },
  },
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Buy milk',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    id: '2',
    title: 'QA dropdown',
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    id: '3',
    title: 'Write schema for account menu',
    state: 'TASK_ARCHIVED',
  },
};

const largeString = `This is a really long task. This is a not considered scenario in a regular development flow. Ussually this type of scenarios are not counted and when the QA team is testing found there were some issues here.`;
export const LongText = Template.bind({});
LongText.args = {
  task: {
    id: '4',
    title: largeString,
    state: 'TASK_INBOX'
  }
}