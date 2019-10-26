import React, {useState} from 'react';
import { axiosWithAuth } from '../../../utils/axiosWithAuth.js';


const initialMemo = {
    memo: ''
};

const EditMemos = ({ memos, setMemos }) => {
    const [editing, setEditing] = useState(false);
    const [memoToEdit, setMemoToEdit] = useState(initialMemo);

    const editMemo = memo => {
        setEditing(true);
        setMemoToEdit(memo);
    };

    const saveEdit = e => {
        e.preventDefault();

        axiosWithAuth()
        .put(`/item/post/voice/${memoToEdit.id}`, memoToEdit)
        .then(res => {
            setMemos(
                memos.map(memo => {
                    if (memo.id === memoToEdit.id) {
                        return memoToEdit;
                    } else return memo;
                })
            )
        })
        .catch(err => console.log(err))
    };

    const deleteMemo = memo => {
        axiosWithAuth()
        .delete(`/item/post/voice/${memo.id}`)
        .then(res => {
            setMemos(memos.filter(data => data.id !== memo.id));
        })
        .catch(err => console.log(err));
    };

         return (
            <>
            {memos.map(memo => (
                <div key={memo.id} onClick={() => editMemo(memo)}>
                    
                    <button onClick={() => deleteMemo(memo)}>delete memo</button>
                </div>
            ))}
            {editing && (
                <form onSubmit={saveEdit}>
                    
                    <label>
                    memo:
                        <input
                        value={memoToEdit.url}
                        onChange={e => setMemoToEdit({ ...memoToEdit, memo: e.target.value})}
                        />
                    </label>
                    <button type="submit">save</button>
                    <button onClick={() => setEditing(false)}>cancel</button>
                </form>
            )}
            </>
       );
    };
    
export default EditMemos;