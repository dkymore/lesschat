export interface ChatMessageReaction {
  name: string;
  author: string;
}
export interface ChatMessage {
  _id: string;
  content: string;
  author?: string;
  groupId?: string;
  converseId: string;
  reactions?: ChatMessageReaction[];
  hasRecall?: boolean;
  meta?: Record<string, unknown>;
  createdAt?: string;
  updatedAt?: string;
}
export declare const chatConverseType: readonly ['DM', 'Multi', 'Group'];
export type ChatConverseType = (typeof chatConverseType)[number];
export interface ChatConverse {
  _id: string;
  name?: string;
  type: ChatConverseType;
  members: string[];
}
