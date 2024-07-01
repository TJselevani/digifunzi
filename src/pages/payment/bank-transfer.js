const BankTransfer = ({styles}) => {
    return ( 
        <div className={styles.content}>
            <div className={styles.x}>
            <div >
               <h2> Drop a cheque at: </h2>
               <br/>
               <p>  Stanbic Bank Ltd </p> 
               <p>  Thika Branch </p> 
               <p>  Acc: Shared Possibility Ltd Acc </p> 
               <p>  no: 0100007878944</p> 
            </div> 
          <div>
                <h2> Swift Transfer: </h2> 
                <br/>
                <p>  Bank code: 031 </p> 
                <p>  Branch code: 015 </p> 
                <p>  Branch Name: Thika Swift </p> 
                <p>  Code: SBICKENX</p> 
          </div>
          </div>
        </div>
     );
}
 
export default BankTransfer;