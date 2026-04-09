import React, { Component } from 'react'

class PaymentPage extends Component {
  constructor(props) {
    super(props)
    this.state = { recipient: '', amount: '', result: null }
  }

  handleSubmit(e) {
    e.preventDefault()
    fetch('/api/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ recipient: this.state.recipient, amount: this.state.amount })
    })
      .then(res => res.json())
      .then(data => this.setState({ result: data }))
  }

  render() {
    return (
      <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem', fontFamily: 'system-ui, sans-serif' }}>
        <h1>Payment Service</h1>
        <p>Acme Bank payment processing platform.</p>

        <section style={{ marginTop: '2rem' }}>
          <h2>Process Payment</h2>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input
              type="text"
              placeholder="Recipient"
              value={this.state.recipient}
              onChange={(e) => this.setState({ recipient: e.target.value })}
              style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem' }}
            />
            <input
              type="number"
              placeholder="Amount"
              value={this.state.amount}
              onChange={(e) => this.setState({ amount: e.target.value })}
              style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem' }}
            />
            <button type="submit" style={{ padding: '0.5rem 1rem' }}>Submit Payment</button>
          </form>
        </section>

        {this.state.result && (
          <section style={{ marginTop: '2rem' }}>
            <h2>Result</h2>
            <pre>{JSON.stringify(this.state.result, null, 2)}</pre>
          </section>
        )}

        <section style={{ marginTop: '2rem' }}>
          <h2>Status</h2>
          <p>Service operational.</p>
        </section>
      </div>
    )
  }
}

export default PaymentPage
