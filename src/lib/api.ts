export type Card = {
  title: string;
  description?: string | null;
  priority: 'low' | 'medium' | 'high';
  deadline?: Date | null;
  ownerId: string;
};

export type Column = {
  title: string;
  boardId: string;
  ownerId: string;
};

export type Board = {
  title: string;
  ownerid: string;
  background?: string | null;
};
